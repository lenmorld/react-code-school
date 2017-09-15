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
    render() {
        const comments = this._getComments();
        return(
            <div className="comment-box">  {/* root CommentBox component */}
                <h3>Comments</h3>
                <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
                <div className="comment-list">
                    {/* Props */}
                    {/*<Comment*/}
                        {/*author="Lenny the Lobster" body="under the sea!"/>*/}
                    {/*<Comment*/}
                        {/*author="Lenny the fisher" body="lets go fishing!"/>*/}

                    {/*JSX can render array of JSX elements*/}
                    {comments}
                </div>
            </div>
        )
    }

    // underscore for self-written methods
    _getComments() {

        const commentList = [
            {id: 1, author: 'Lenny Lobster', body: 'Great picture!' },
            {id: 2, author: 'Lenny Fisher', body: 'Excellent stuff'}
        ];

        return commentList.map((comment) => {
            return (
                <Comment
                    author={comment.author} body={comment.body}
                    key={comment.id}
                />);
            // pass key for unique identification
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


}

ReactDOM.render(
    <CommentBox />, document.getElementById('comment-app')
);
