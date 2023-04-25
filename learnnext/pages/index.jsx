import { useState } from "react";

  function Header({ title }) {
                console.log(title);
                return (<h1>{title}</h1>)
            }

export default function HomePage() {

                const names = ['John', 'Jane', 'Bob', 'Mary'];

                const [likes, setLikes] = useState(0);

                function handleClick() {
                    console.log('Clicked');
                    setLikes(likes + 1);
                }

                return (
                    <div>
                        <Header title="This is the title" />
                        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                        <ul>
                            {names.map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ul>

                        <button onClick={handleClick}>Like ({likes})</button>
                    </div>
                )
            }
