import React from 'react'
import { useSWRInfinite } from 'swr'
import { Button } from '../../compoents/button'
import MainContent from '../../compoents/container/MainContent'
import Modal from '../../compoents/Modal'
import { Tbody, TbodyContentWrapper } from '../../compoents/Table/Tbody'
import { Thead, TheadWrapper } from '../../compoents/Table/Thead'
import { withAuth } from '../../hoc/withAuth'
import { Product as Iproducts } from '../../model/Product'
import { useModal } from '../../providers/ModalProvider'
import { API } from '../../services/api'

const fetcher = url => API.get(url).then(res => res.data);

const Product = () => {
    const { data, size, setSize } = useSWRInfinite(index => `/api/v1/product?page=${index + 1}`, fetcher);
    const product = data ? [].concat(...data) : [];
    const { modal, setModal } = useModal()
    return (
        <>
            <MainContent>
                <div className="flex justify-between  px-24 py-2">
                    <header className="text-3xl font-semibold text-gray-800">Produk</header>
                    <Button variant='primary' textVariant='bold' size='xlarge' type='button' onClick={() => setModal(!modal)}>
                        Tambah
                    </Button>
                </div>
                <div className="px-24 py-4 flex  justify-center">
                    <table className='w-full text-md  shadow-md rounded-lg mb-4' >
                        <tbody>
                            <TheadWrapper>
                                <Thead name="Nama Produk" />
                                <Thead name="Harga 8/KL" />
                                <Thead name="Harga Beli /L" />
                                <Thead name="Harga Jual /l" />
                            </TheadWrapper>
                            {product.map(({ data }) => (
                                (data as Iproducts[]).map(val => (
                                    <TbodyContentWrapper key={val.id}>
                                        <Tbody value={val.name} />
                                        <Tbody value={val.price_8kl} />
                                        <Tbody value={val.price_sell} />
                                        <Tbody value={val.price_buy} />
                                    </TbodyContentWrapper>
                                ))
                            ))}
                            <p className="text-center cursor-pointer font-semibold" onClick={() => setSize(size + 1)}>Load more</p>
                        </tbody>
                    </table>
                </div>
                <Modal>
                    <div className="p-2 l">
                        <div className="overflow-auto h-44">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi, veritatis dicta aut cupiditate, adipisci deserunt in, saepe quidem nulla
                            tenetur sunt. Iste expedita eveniet rem quisquam eaque dolore! Similique in laborum nulla saepe commodi autem labore, perferendis et rerum repellat
                            vero incidunt delectus alias ipsam voluptates quasi. Ipsa maxime officiis non expedita odio consequuntur. Totam, blanditiis! Voluptas necessitatibus
                            voluptatibus unde expedita praesentium obcaecati dolor nesciunt magnam magni voluptatem, excepturi natus minima illo cum aliquid officia corrupti eveniet.
                            Unde voluptate, facere repellat, iure sunt molestiae fuga deleniti corrupti eveniet maiores, eligendi dolorem aspernatur adipisci harum debitis. Ex cupiditate
                            molestias modi. Aperiam sequi assumenda iure eveniet inventore ipsa voluptatibus dolor. Esse voluptatem tenetur quos voluptates temporibus minus distinctio
                            dicta necessitatibus, nihil provident et vitae dolore quas quia praesentium fugiat a numquam! Possimus suscipit alias eligendi dignissimos consequatur quos
                            id atque aliquam exercitationem culpa sed at distinctio cupiditate nemo corporis delectus, reiciendis commodi. Praesentium quia, similique vitae officia facere
                            accusantium. Enim natus quibusdam aspernatur minima impedit quas commodi fugiat? Numquam non nobis totam natus. Pariatur, modi repellendus! Soluta ipsum, iste,
                            sunt
                            dignissimos delectus commodi harum sit maxime modi corrupti, sed rerum aspernatur illo dolore quod facilis atque ipsam enim ut veniam sapiente.
                        </div>
                    </div>
                </Modal>
            </MainContent>
        </>
    )
}

export default withAuth(Product)
