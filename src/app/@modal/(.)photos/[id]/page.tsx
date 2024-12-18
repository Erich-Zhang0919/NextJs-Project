"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'


const products = [
    {
      id: "1",
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: "2",
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: "3",
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: "4",
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]
export default function Page({ params } : { params: { id: string }  }) {
  const photo = products.find(item => item.id === params.id)!;
  const router = useRouter();
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-gray-500/[.8]' onClick={router.back}>
      <Image src={photo.imageSrc} width={400} height={400} alt={photo.imageAlt} />
    </div>
  )
}
