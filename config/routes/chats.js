var express = require('express');
var router = express.Router();

var chats = require('chats_controller');

/* get users login. */
router.get('/', chats.show_chat_room);
router.post('/send', chats.send);


module.exports = router;
