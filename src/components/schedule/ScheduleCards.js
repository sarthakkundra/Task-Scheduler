import React, { Fragment } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import ScheduleCard from "./ScheduleCard";
import res from "../../dummyData";

const FEED_QUERY = gql`
	{
		task {
			name
            day
            month
            year
            startHr
            startMin
            startZone
            endHr
            endMin
            endZone
		}
	}
`;

var cards = res.data.task;

const ScheduleCards = () => {
	return (
		<Fragment>
			<div>
                    <Query query={FEED_QUERY}>
                        {({  loading, error, data }) => {
                            if(loading) return <div>Fetching</div>
                            if(error) return <div>Error  Loading</div>
                            cards = data.task

                            return (
                                <div>
                                {cards.map((task) => (
                                    <ScheduleCard
                                        day = {task.day}
                                        month={task.month}
                                        year={task.year}
                                        name={task.name}
                                        startHr = {task.startHr}
                                        startZone = {task.startZone}
                                        endHr = {task.endZone}
                                    />
                                ))}
                                </div>
                            )
                        }}
				
                    </Query>
			</div>
		</Fragment>
	);
};

export default ScheduleCards;
