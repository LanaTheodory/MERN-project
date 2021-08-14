<div>
  <p>create a new room</p>
  <IconButton
    className={clsx(classes.expand, {
      [classes.expandOpen]: expanded,
    })}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    {/* <ExpandMoreIcon /> */}
    <CommentIcon />
  </IconButton>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <form onSubmit={createRoom}>
      <label htmlFor="roomName">Room Name:</label>
      <br />
      <input type="text" onChange={(e) => setRoomName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  </Collapse>
</div>;
{
  rooms.map((room, idx) => {
    return (
      <ul>
        <Link to={`/${room._id}`}>
          <li key={idx}>{room.roomName}</li>
        </Link>
      </ul>
    );
  });
}
{
  /* </List> */
}
<div>
  <p>create a new room</p>
  <IconButton
    className={clsx(classes.expand, {
      [classes.expandOpen]: expanded,
    })}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    {/* <ExpandMoreIcon /> */}
    <CommentIcon />
  </IconButton>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <form onSubmit={createRoom}>
      <label htmlFor="roomName">Room Name:</label>
      <br />
      <input type="text" onChange={(e) => setRoomName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  </Collapse>
</div>;
{
  rooms.map((room, idx) => {
    return (
      <ul>
        <button onClick={(e) => navigate(`/${room._id}`)}>
          <li key={idx}>{room.roomName}</li>
        </button>
      </ul>
    );
  });
}

// ......................................................................

<ListItem button key="create rooms">
  <ListItemIcon>
    <Tooltip title="Create Room" arrow>
      <div>
        <ListItemText primary="Create" />
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
        <AddBoxIcon primary="About AXSOS" />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <form onSubmit={createRoom}>
            <label htmlFor="roomName">Room Name:</label>
            <br />
            <input type="text" onChange={(e) => setRoomName(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
        </Collapse>
      </div>
    </Tooltip>
  </ListItemIcon>
  <ListItemText primary="Create Roomss" />
</ListItem>;
