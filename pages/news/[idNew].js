import {useRouter} from 'next/dist/client/router';
import Content1 from '../../component/Content1'
import DefaultLayout from '../../layout/defaultLayout/defaultLayout';
export default function Content(){
    const router = useRouter();
    return (
        <DefaultLayout>
            <Content1/>
        </DefaultLayout>
    )
    
}