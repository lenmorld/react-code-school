/**
 * Created by lenny on 9/15/2017.
 */

class Comment extends React.Component {
    render() {
        return(
            <div className="comment"> {/* Comment component */}
                <p className="comment-header">{this.props.author}</p>
                <p className="comment-body">
                    {this.props.body}
                </p>
                <div className="comment-footer">
                    <a href="#" className="comment-footer-delete">
                        Delete comment
                    </a>
                </div>
            </div>
        );
    }
}

class CommentBox extends React.Component {

    // need constructor to define initial state of component
    constructor() {
        super();

        this.state = {
            showComments: false,
            comments: []

            // ## replace hard-coded data with API data ##

            // comments: [
            //     {id: 1, author: 'Lenny Lobster', body: 'Great picture!' },
            //     {id: 2, author: 'Lenny Fisher', body: 'Excellent stuff'}
            // ]
        };

    }

    render() {
        const comments = this._getComments();

        // show/hide comments
        let commentNodes;
        let buttonText = 'Show comments';

        if (this.state.showComments) {
            buttonText = 'Hide comments';
            commentNodes = <div className="comment-list">{comments}</div>;
        }

        return(
            <div className="comment-box">
                {/*for adding comments*/}
                {/*bind this function to the CommentForm child component*/}
                <CommentForm addComment={this._addComment.bind(this)} />

                <h3>Comments</h3>

                <button onClick={this._handleClick.bind(this)}>
                    {buttonText}
                </button>

                <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>

                {commentNodes}

                {/*<div className="comment-list">*/}
                    {/*{comments}*/}
                {/*</div>*/}
            </div>
        )
    }

    // underscore for self-written methods
    _getComments() {
        // ==== list move into Component state ====

        // const commentList = [
        //     {id: 1, author: 'Lenny Lobster', body: 'Great picture!' },
        //     {id: 2, author: 'Lenny Fisher', body: 'Excellent stuff'}
        // ];

        // return commentList.map((comment) => {
        //     return (
        //         <Comment
        //             author={comment.author} body={comment.body}
        //             key={comment.id}
        //         />);
        //     // pass key for unique identification
        // });


        return this.state.comments.map((comment) => {
            return (
                <Comment
                    author={comment.author}
                    body={comment.body}
                    key={comment.id} />
            );
        });
    }

    _getCommentsTitle(commentCount) {
        if (commentCount == 0) {
            return 'No comments yet';
        }
        else if (commentCount == 1) {
            return '1 comment';
        }
        else {
            return `${commentCount} comments`;      // <- `` for extrapolation
        }
    }

    _handleClick() {
        this.setState({
           showComments: !this.state.showComments
        });
    }

    _addComment(author, body) {
        const comment = {
          id: this.state.comments.length + 1,
            author,
            body
        };
        // array references instead of mutating object
        this.setState({ comments: this.state.comments.concat([comment]) });
    }

    // REACT lifecycle method

    // called before component is rendered on page
    componentWillMount() {
        _fetchComments();
    }

    // called after component is rendered
    componentDidMount() {
        this._timer = setInterval(() => this._fetchComments(), 5000);     // poll every 5 seconds

        // React optimizes rendering by only updating the DOM when changes are detected
        // on the resulting markup
    }

    // called when component is about to be removed from DOM
    componentWillUnmount() {
        // remove timer to prevent memory leak
        clearInterval(this._timer);
    }

    _fetchComments() {
        jQuery.ajax({
           method: 'GET',
            url: '/api/comments',
            // arrow function preserve 'this' binding to our class inside callback
            success: (comments) => {
               this.setState({ comments })
            }
        });
    }

}

class CommentForm extends React.Component {
    render() {
        return(
            <form className="comment-form"
                    onSubmit={this._handleSubmit.bind(this)} >
                <label>Join the discussion</label>
                <div className="comment-form-fields">
                    <input placeholder="Name:"
                        ref={(input) => this._author = input }/>
                    <textarea placeholder="Comment:"
                        ref={(textarea) => this._body = textarea}></textarea>
                </div>
                <div className="comment-form-actions">
                    <button type="submit">
                        Post comment
                    </button>
                </div>
            </form>
        )
    }

    _handleSubmit(event) {
        event.preventDefault();     // prevent page from reloading after submit

        let author = this._author;     // populate from refs in JSX
        let body = this._body;

        // this function will be defined in parent CommentBox
        // common in React, pass functions from parent to child components
        this.props.addComment(author.value, body.value);
    }
}


ReactDOM.render(
    <CommentBox />, document.getElementById('comment-app')
);
