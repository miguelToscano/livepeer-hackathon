import axios from 'axios';
import { Video } from './types';

export const getVideos = async (apiKey: string = '9305fdad-5a6c-4064-8491-b2b04ff461a2'): Promise<Array<Video>> => {
    try {
        const getAssetsResponse = await axios.get('https://livepeer.com/api/asset', {
            headers: {
                authorization: `Bearer ${apiKey}`
            }
        });
    
        return getAssetsResponse.data.filter((video: { status: string; }) => video.status === 'ready');
    } catch(error) {
        console.log(error);
        return [];
    }
}

export const getVideo = async (apiKey: string = '9305fdad-5a6c-4064-8491-b2b04ff461a2', videoId :string): Promise<Video | null> => {
    try {
        const getAssetResponse = await axios.get(`https://livepeer.com/api/asset/${videoId}`, {
            headers: {
                authorization: `Bearer ${apiKey}`
            }
        });

        return getAssetResponse.data;
    } catch(error) {
        console.log(error);
        return null;
    }
}

export const uploadVideo = async (apiKey: string = '9305fdad-5a6c-4064-8491-b2b04ff461a2') => {

    try { 
        const requestUploadResponse = await axios.post('https://livepeer.com/api/asset/request-upload', {
            headers: {
                authorization: `Bearer ${apiKey}`,
            }
        });
    
        const uploadAssetResponse = await axios.put(requestUploadResponse.data.url, {
            headers: {
                authorization: `Bearer ${apiKey}`,
            },
            
        });
    } catch(error) { 

    }


    return Promise.resolve();
}