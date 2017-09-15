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
        return(
            <div class="comment-box">  {/* root CommentBox component */}
                <h3>Comments</h3>
                <h4 className="comment-count">2 comments</h4>
                <div className="comment-list">
                    {/* Props */}
                    <Comment
                        author="Lenny the Lobster" body="under the sea!"/>
                    <Comment
                        author="Lenny the fisher" body="lets go fishing!"/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <CommentBox />, document.getElementById('comment-app')
);
