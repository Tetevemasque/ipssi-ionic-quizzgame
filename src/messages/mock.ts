import { Message } from './models'

const messages: Message[] = [
    {
        "author":
        {
            "login":"test",
            "avatar":"https://www.drupal.org/files/issues/default-avatar.png"
        },
            "content":"Test test",
            "date":"Mon Jun 18 2018 10:24:34 GMT+0200 (CEST)",
            "type":0,
            "id":6
        },
        {
            "author":
            {
                "login":"test",
                "avatar":"https://www.drupal.org/files/issues/default-avatar.png"
            },
            "content":"Hey ! How are you doing ?",
            "date":"Mon Jun 18 2018 10:24:26 GMT+0200 (CEST)",
            "type":0,
            "id":5
        },
        {
            "author":
            {
                "login":"test",
                "avatar":"https://www.drupal.org/files/issues/default-avatar.png"
            },
            "content":"Test",
            "date":"Mon Jun 18 2018 10:24:16 GMT+0200 (CEST)",
            "type":0,
            "id":4
        },
        {
            "id":3,
            "author":
            {
                "login":"Michael",
                "avatar":"https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png"
            },
            "content":"Coming soon... That's what she said",
            "date":"2017-12-05",
            "image":"https://upload.wikimedia.org/wikipedia/en/a/af/Threat-Level-Midnight.jpg",
            "type":1
        },
        {
            "id":2,
            "author":
            {
                "login":"Jim",
                "avatar":"https://pbs.twimg.com/profile_images/3171824697/ef75d90df2e65ce326acf30262df5918_400x400.jpeg"
            },
            "content":
            "Be the Jim to my Pam,not the Toby to my Michael.",
            "date":"2017-12-05",
                "type":0
            }
        ];

export default messages
