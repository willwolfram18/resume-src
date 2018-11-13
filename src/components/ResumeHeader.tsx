import * as React from "react";
import { Container, Header, List } from "semantic-ui-react";

export class ResumeHeader extends React.Component {
    render() {
        return (
            <Container>
                <Header as="h1">
                    William Wolfington
                </Header>
                <hr />
                <List horizontal>
                    <List.Item>
                        <List.Content>
                            San Diego, CA
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            GitHub Handle: <a href="https://github.com/willwolfram18">willwolfram18</a>
                        </List.Content>
                    </List.Item>
                </List>
            </Container>
        );
    }
}