import React from 'react'
import { statsItems } from '../../utils/website_data'
import StatsItem from './StatsItem';

const Stats = () => {
  return (
   <section className="home-b text-center py-2">
  <div className="stats">
    {statsItems.map((item) => <StatsItem key={item.id} {...item}/>)}
  </div>
</section>

  )
}

export default Stats