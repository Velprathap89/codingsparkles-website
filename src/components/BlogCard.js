import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const BlogCard = ({ posts }) => {
    const classes = useStyles();

    return (
        <div className='card-container'>
            {
                posts.map((post, index) => {
                    const title = post.frontmatter.title || post.fields.slug;
                    const imgSrc = (post.frontmatter.thumb && post.frontmatter.thumb.childImageSharp.fluid) || null;
                    const isLargeCard = index % 3 === 0;
                    const className = `post-card-container ${isLargeCard ? "large-card" : ""}`;
                    return <div className={className}><Card className={classes.root} key={post.fields.slug}>
                        <CardActionArea>
                            <Img fluid={imgSrc} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.frontmatter.description || post.excerpt}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to={post.fields.slug} itemProp="url">
                                Read More
                            </Link>
                        </CardActions>
                    </Card></div>
                })
            }
        </div>
    );
}

export default BlogCard;