import axios from 'axios';

export type GetRandomImageUrlProps = {
  width: number,
  height: number
}

const GetRandomImageUrl = async (props: GetRandomImageUrlProps) : Promise<string> => {
  const response = await axios.get(`https://picsum.photos/${props.width}/${props.height}`);
  const imageUrl = `https://i.picsum.photos${response.request.path}`;
  return imageUrl;
};

export default GetRandomImageUrl;
