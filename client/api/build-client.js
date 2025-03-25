import axios from 'axios';

export default ({ req }) =>{
   if(typeof window === 'undefined'){
      // we must be on a server.
      return axios.create({
         baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
         headers: req.headers
      });
   }else {
      // we must be on a browser.
      return axios.create({
         baseUrl: '/'
      })
   }
}