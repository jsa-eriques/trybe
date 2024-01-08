import React, { Component } from 'react';
import Loading from './Loading'
import PersonCard from './PersonCard';

class PersonDetails extends Component {

    constructor() {
        super()

        this.getUserElements = this.getUserElements.bind(this)
        this.fetchRandomUser = this.fetchRandomUser.bind(this)

        this.state = {
            person: [],
            loading: true,
        };
    }
    async fetchRandomUser(){
        const response = await fetch('https://api.randomuser.me/')
        const data = await response.json()
        console.log(data)

        this.setState({
            person: data.results,
            loading: false,
        })
    }

    getUserElements(user) {
        return {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            age: user.dob.age,
            image: user.picture.thumbnail,
        }
    }

    componentDidMount() {
        this.fetchRandomUser()
    }

    shouldComponentUpdate(_props, state) {
        const age = 50;
        if (state.person[0].dob.age < age) return true;
    }
  render() {
    const { loading, person } = this.state;
     if (loading) return <Loading />;
    return (
        <>
            <PersonCard person={ this.getUserElements(person[0])}  />
        </>
    )
  }
}

export default PersonDetails;