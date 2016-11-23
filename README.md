# react-audio
Declerative Audio component for react redux structure

### Installation
simply run `npm install react-audio --save` or clone the repository `git clone https://github.com/farskid/react-audio.git`.

### Usage
import `Audio` into your component and use it.

```javascript
  import React, {Component} from 'react'
  import Audio from 'react-audio'
  
  export default class MyComponent extends Component {
    render() {
      return (
        <Audio source="example/audio/path" />
      )
    }
  }
```

### Usefull props
The only required prop is `source`. There are also other helper props:

* logger ==> Boolean ==> indicates whether audio element should log changes in props and status
* loop ==> Boolean ==> indicates whether the audio should be played infinite loop or not (It will pause during pause condition)
* pause ==> statement which when gets __true__ the audio will pause and will resume or play when it changes to __false__.
