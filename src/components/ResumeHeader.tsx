import * as React from "react";
import { Container, Header, Grid } from "semantic-ui-react";

export class ResumeHeader extends React.Component
{
    render()
    {
        return (
            <Grid columns={1}>
                <Grid.Row className="border-bottom">
                    <Header as="h1" className="mb-0">
                        William Wolfington
                    </Header>
                    <hr />
                </Grid.Row>
                <Grid.Row>
                    <Grid stackable columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                San Diego, CA
                            </Grid.Column>
                            <Grid.Column>
                                GitHub Handle: <a href="https://github.com/willwolfram18">willwolfram18</a>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Row>
            </Grid>
        );
    }
}