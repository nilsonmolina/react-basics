import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props);
        axios.get('/posts/')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Nilson'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log(response);
            })
            .catch(error => {
                console.log('[Blog error]\n', error);
                // console.log('You done f*cked up!');
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/posts/' + id});
        // this.props.history.push('/posts' + id);
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post 
                        title={post.title} 
                        author={post.author}
                        key={post.id}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} component={FullPost} />
            </div>
            
        );
    }
}

export default Posts;