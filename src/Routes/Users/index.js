import React, { Component } from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Users extends Component {
    state = {
        users: [
            {
                fname: 'Piotr',
                lname: 'Zieba',
                age: 27,
                numOfPictures: 5
            }
        ]
    };

    renderCard = ({ fname, lname, age }) => (
        <Card >
            <CardHeader
                title={`${fname} ${lname}`}
                subtitle={age}
            >
            </CardHeader>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem libero assumenda deserunt laboriosam aliquid debitis fuga velit tempore blanditiis delectus, quaerat ipsum repudiandae numquam, quisquam fugit. Laudantium, maxime quaerat obcaecati?
            </CardText>
        </Card>
    );

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <input type="text" name="lastname" value="" />
                    <input type="text" name="firstname" value="" />
                    <input type="text" name="age" value="" />
                    <button>Add</button>
                    {this.state.users.map(this.renderCard)}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Users;