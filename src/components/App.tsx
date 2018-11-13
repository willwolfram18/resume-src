import * as React from  "react";
import { Container } from "semantic-ui-react";

import { ResumeHeader } from "@app/components/ResumeHeader";
import { PersonalSummary } from "@app/components/PersonalSummary";

export class App extends React.Component
{
    render()
    {
        return (
            <Container>
                <ResumeHeader />
                <PersonalSummary />
            </Container>
        )
    }
}