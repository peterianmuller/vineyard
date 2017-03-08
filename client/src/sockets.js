import io from 'socket.io-client'

// FOR DEVELOPMENT
export default io('http://localhost:3000/');
// FOR PRODUCTION
// export default io('http://ec2-54-153-117-230.us-west-1.compute.amazonaws.com:3000/');
