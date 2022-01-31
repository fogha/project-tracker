import React from 'react';
import { connect } from 'react-redux';
import './auth.scss'
import collab from '../../assets/collaborate.svg'
// import { githubProvider } from '../../configs/authMethod';
import githubAuth from '../../services/auth';


export const Auth = (props) => {

    const handleSignin = async (provider) => {
        const res = await  githubAuth(provider)
    }

    return (
        <div className='auth'>
            <div className="auth_left">
                <img src={collab} className='auth_image' alt="" srcset="" />
            </div>
            <div className="auth_right">
                <div className="auth_card">
                    <h2> SignIn Using Github Auth</h2>
                    <button className="auth_button"> Sign in with Gitub</button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
