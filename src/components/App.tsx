import * as React from  "react";
import { Container, Header } from "semantic-ui-react";

export class App extends React.Component {
    render() {
        return (
            <Container>
                <Header as="h2">
                    Hello, world!
                </Header>
                <p>
                    This is the content!
                </p>
            </Container>
        )
    }
}