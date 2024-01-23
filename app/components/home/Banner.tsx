"use client"
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Slider from '../general/Slider'

export default function Banner() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      <div>
        <Slider />
      </div>
    </div>
  )
}

