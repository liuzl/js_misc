package main

import (
	"flag"
	"net/http"
	"strings"

	"github.com/golang/glog"
	"github.com/liuzl/fmr"
	"github.com/liuzl/goutil/rest"
)

var (
	addr    = flag.String("addr", ":8080", "bind address")
	grammar = flag.String("g", "company.grammar", "grammar file")
	start   = flag.String("start", "company", "start rule")
	g       *fmr.Grammar
)

func FmrHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	line := r.FormValue("nl")
	line = strings.TrimSpace(line)
	if len(line) == 0 {
		rest.MustEncode(w, rest.RestMessage{"error", "empty input"})
		return
	}
	trees, err := g.Parse(line, *start)
	if err != nil {
		rest.MustEncode(w, rest.RestMessage{"error", err.Error()})
		return
	}
	glog.Info(line, " tree: ", len(trees))
	var ret []string
	for _, tree := range trees {
		sem, err := tree.Semantic()
		glog.Info(sem)
		if err != nil {
			continue
		}
		ret = append(ret, sem)
	}
	rest.MustEncode(w, rest.RestMessage{"ok", ret})
}

func main() {
	flag.Parse()
	defer glog.Flush()

	var err error
	g, err = fmr.GrammarFromFile(*grammar)
	if err != nil {
		glog.Fatal(err)
	}

	defer glog.Info("server exit")
	http.Handle("/fmr/", rest.WithLog(FmrHandler))
	glog.Info("server listen on", *addr)
	glog.Error(http.ListenAndServe(*addr, nil))
}
