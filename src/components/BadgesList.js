import React from 'react'
import twitterLogo from '../images/twitter.png'
import './styles/BadgesList.css'

export default class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled BadgesList">
                {this.props.badges.map(badge => {
                    return (
                        <li key={badge.id} className="BadgesListItem">
                            <img
                                className="BadgesListItem__avatar"
                                src={badge.avatarUrl}
                                alt={`${badge.firstName} Avatar`}
                            />
                            <p className="container BadgesListItem__info">
                                <span className="font-weight-bold">
                                    {badge.firstName} {badge.lastName}
                                </span>
                                <a
                                    className="flex"
                                    href={`https://www.twitter.com/${badge.twitter}`}
                                    target="/"
                                >
                                    <img
                                        style={{ height: 30, width: 30 }}
                                        className="img-fluid"
                                        src={twitterLogo}
                                        alt="twitter logo"
                                    />
                                    <span>@{badge.twitter}</span>
                                </a>

                                <span>{badge.jobTitle}</span>
                            </p>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
