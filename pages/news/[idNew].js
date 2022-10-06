import {useRouter} from 'next/dist/client/router';
import {detailNews} from '../../shared/data/detailNew'
export default function Content(){
    const router = useRouter();
    const content = detailNews[0].content;
    console.log(content);
    return (
        {content}
    )
}