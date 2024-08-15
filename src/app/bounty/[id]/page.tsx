import { BountyDetails } from '@/components/bounty-component/BountyDetails'
import { notFound } from 'next/navigation';
import React from 'react'

import dummyData, { DataProp } from '../../../../dummy-data';

export async function generateStaticParams() {
  return dummyData.map((data) => ({
    id: data.title,
  }));
}

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const getData = dummyData.find((data: DataProp) => data.title === id);

  if (!getData) {
    return notFound(); // Show a 404 page if the id doesn't match any bounty
  }

  return (
    <div>
        <BountyDetails getData={getData} />
    </div>
  )
}

export default page