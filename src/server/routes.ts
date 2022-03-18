import { Express } from 'express';
import {getVideos, getVideo} from '../core/videos/services';

const bindRoutes = (app: Express) => {
    app.get('/', (req, res) => {
        return res.status(200).send({
            message: 'Im alive!'
        })
    });

    app.get('/health', (req, res) => {
        return res.status(200).send({
            message: 'Im healthy!'
        })
    });

    app.get('/videos', async (req, res) => {
        const videos = await getVideos(req.headers.authorization);
        console.log(videos);
        return res.status(200).send({
            videos
        })
    })

    app.get('/videos/:videoId', async (req, res) => {
        const video = await getVideo(req.headers.authorization, req.params.videoId);
        console.log(video);
        return res.status(200).send({
            video
        })
    })

    app.post('/videos', async (req, res) => {
        console.log(req.headers);
        console.log(req.body);
        console.log(req);
        return res.status(201).send({
            message: 'uploaded!'
        })
    })
}

export default bindRoutes;