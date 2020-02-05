import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import CreateIcon from '@material-ui/icons/Create'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    title: '',
    body: '',
  })
  const handleToggle = () => {
    setOpen(!open)
  }
  const handleChange = e => {
    const {name, value} = e.target
    setForm({ ...form, [name]: value })
  }

  const [screams, setScream] = useState([
    {id: 'first-title', title: 'first title', body: 'first body'},
  ])

  const handleCreate = () => {
    setOpen(!open)
    setScream([...screams, {
      id: form.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...form
    }])
  }

  return <div className={classes.root}>
    {screams.map( ({id, title, body}) => <Card key={id}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://via.placeholder.com/140"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )}
    <Fab
      color='secondary'
      aria-label='create'
      onClick={handleToggle}
      className={ classes.fab }
    >
      <CreateIcon />
    </Fab>
    <Dialog
      open={open}
      onClose={handleToggle}
      fullWidth
    >
      <DialogTitle id="new">
        Create a New Dialog
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="title"
          value={form.title}
          name="title"
          onChange={handleChange}
          fullWidth
        />
        <br/>
        <TextField
          multiline
          rows="4"
          margin="dense"
          id="body"
          label="body"
          value={form.body}
          name="body"
          onChange={handleChange}
          fullWidth
        />
        <br/>
        <Button
          color="primary"
          variant='contained'
          onClick={handleCreate}
          disabled={!form.title || !form.body}
        >
          Create
        </Button>
      </DialogContent>
    </Dialog>
  </div>
}
