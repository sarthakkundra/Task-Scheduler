import React, { Fragment } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import ScheduleCard from "./ScheduleCard";
import res from "../../dummyData";

const FEED_QUERY = gql`
	{
		task {
			name
			date
			start_time
			end_time
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
                            console.log(data)
                            cards = data.task

                            return (
                                <div>
                                {cards.map((task) => (
                                    <ScheduleCard
                                        date={task.date}
                                        name={task.name}
                                        start={task.start_time}
                                        end={task.end_time}
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
