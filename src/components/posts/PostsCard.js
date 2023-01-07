import React from 'react';
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  Collapse,
  IconButton,
} from '@mui/material';
import { MdDoubleArrow } from 'react-icons/md';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import sanitizeHtml from 'sanitize-html';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',

  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostsCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { content, coverImage, tags, title, shortText } = props;
  return (
    <Card align="center" sx={{ maxWidth: 600 }}>
      <CardMedia component="img" image={coverImage.url} alt={title} />
      <CardContent>
        <Typography variant="h4" fontWeight="500" gutterBottom>
          {title}
        </Typography>
        <Typography gutterBottom>{shortText}</Typography>
        {tags.map((item) => (
          <Button key={item}>{item}</Button>
        ))}
      </CardContent>
      <Button
        sx={{ margin: '20px' }}
        variant="outlined"
        endIcon={<MdDoubleArrow />}
      >
        Read-More
      </Button>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
          ></div>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PostsCard;
