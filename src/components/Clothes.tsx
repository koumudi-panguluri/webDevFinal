'use client';

import { SimpleLayout } from '@/components/SimpleLayout'
import { useEffect, useState } from 'react';
import Image, { type ImageProps } from 'next/image'
import { Button } from './Button';
import Link from 'next/link'
export function Clothes(props) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://webdevnest-default-rtdb.firebaseio.com/category.json`).then((response) => {
                return response.json().then((res) => {

                    const filteredData = res?.filter((element) => element?.category === props?.data);
                    console.log(filteredData);
                    setItems(filteredData);
                    return filteredData;

                }).catch((err) => {
                    console.log(err);
                })
            });
        }
        fetchData();
    }, []);

    const getName = (name: any) => {
        const string = name?.charAt(0).toUpperCase() + name.slice(1) + " Wear"
        return string;
    }

    function NavLink({
        href,
        children,
    }: {
        href: string
        children: React.ReactNode
    }) {
        return (
            <Link
                href={href}
                className="transition hover:text-teal-500 dark:hover:text-teal-400"
            >
                {children}
            </Link>
        )
    }

    return (
        <SimpleLayout
            title={getName(props?.data)}
            intro=""
        >
            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                {items.map((item: any, index) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
                        <img src={item?.image_url} alt={item?.title} className="w-full" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item?.title}</div>
                            <p className="text-white-700 text-base">
                                Amount: {item?.price}
                            </p>
                            <NavLink href={"/uses?itemId=" + item?.itemId}> <Button variant="primary" className="mt-4" >Buy</Button>
                            </NavLink>

                        </div>
                    </div>
                ))}
            </ul>
        </SimpleLayout>
    )
}
