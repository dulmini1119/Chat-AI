import {IKContext, IKImage, IKUpload} from 'imagekitio-react';

const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
const publickey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;
const authenticator = async () => {
    try{
        const response = await fetch('https://localhost:3000/api/upload');

        if(!response.ok){
            const errorText = await response.text();
            throw new Error(`Request failed status ${response.status}: ${errorText}`)
        }

        const data = await response.json();
        const {signature, expire, token} = data;
        return {signature, expire, token};
    }catch(error){
        throw new Error(`Authentication request failed: ${error.message}`)
    }
}

const Upload = () => {
  return (
    <IKContext
    urlEndpoint={urlEndpoint}
    publicKey={publickey}
    authenticator={authenticator}>
        <IKUpload
        fileName="test-upload.png"
        onError={onError}
        onSuccess={onSuccess}
        />
    </IKContext>
  );
};

export default Upload