import React, {Component} from 'react';
import {Card, CardTitle, Cell} from "react-mdl";

export default class card extends Component {

    render() {

        return (
                <Card shadow={0} className="main-cards">
                    <CardTitle expand className="main-card-title">
                            <h2 style={{marginTop: '0'}}>
                                Featured event:
                                <br/>
                                <h4>Event</h4>


                                <h4 style={{marginBottom: '0'}}>
                                    May 24, 2016<br/>
                                    7-11pm
                                </h4>
                            </h2>
                    </CardTitle>
                </Card>
        )
    }
}