import React from 'react'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import './styles/BadgeNew.css'

export default class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Ramiro"
                                lastName="Gavagnin"
                                jobTitle="FrontEnd Engineer"
                                twitter="@ramirogavagnin"
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
