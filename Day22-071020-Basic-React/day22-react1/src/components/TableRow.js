import React, { Component } from 'react'

class UserData extends Component {
    state = {
        isShow: true,
        bgColor: this.props.bgColor,
    };
    render() {
        const {isShow} = this.state;

        return (
            isShow && <tr className="UserData"
                onClick={() => this.setState({ bgColor: "DarkKhaki" })}
                style={{ backgroundColor: this.state.bgColor }}>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.age}</td>
                <td>
                    <button
                        onClick={() => this.props.setName(this.props.name)}>
                        Call My Name</button></td>
            </tr>
        );
    }
}

export default UserData
