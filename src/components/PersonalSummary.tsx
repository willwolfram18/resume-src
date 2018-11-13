import * as React from "react";
import { Container, Header } from "semantic-ui-react";

export class PersonalSummary extends React.Component
{
    render()
    {
        return (
            <Container>
                <Header as="h3">
                    Software Developer
                </Header>
                <p>
                    Experienced and driven web developer, seeking a company
                    that positively changes lives through software.
                </p>
            </Container>
        )
    }
}