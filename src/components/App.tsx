import * as React from  "react";
import { Container } from "semantic-ui-react";

import { ResumeHeader } from "@app/components/ResumeHeader";

export class App extends React.Component {
    render() {
        return (
            <Container>
                <ResumeHeader />
            </Container>
        )
    }
}