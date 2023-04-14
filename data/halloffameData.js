const hallOfFameData = {
  title: 'Hall of Fame',
  description: 'Some of our favorite moments with talent, influencers, and collaborators.',
  imagesSrc: [
    {
      caption: 'Caption 1',
      src: 'https://static.wixstatic.com/media/f73c4f_a4a9fb7dcd5648debbf30ffbf94d4a45~mv2.jpg/v1/fit/w_392,h_292,q_90/f73c4f_a4a9fb7dcd5648debbf30ffbf94d4a45~mv2.jpg',
      thumbWidth: 392,
      thumbHeight: 292,
      aspect_ratio: 13 / 10,
      width: 1280,
      height: 960,
      original:
        'https://static.wixstatic.com/media/f73c4f_a4a9fb7dcd5648debbf30ffbf94d4a45~mv2.jpg',
    },
    {
      caption: 'Caption 2',
      src: 'https://static.wixstatic.com/media/f73c4f_871930b17e15433b9aa116a55fb11ac0~mv2.jpg/v1/fit/w_193,h_143,q_90/f73c4f_871930b17e15433b9aa116a55fb11ac0~mv2.jpg',
      thumbWidth: 193,
      thumbHeight: 143,
      aspect_ratio: 13 / 10,
      width: 1276,
      height: 956,
      original:
        'https://static.wixstatic.com/media/f73c4f_871930b17e15433b9aa116a55fb11ac0~mv2.jpg',
    },
    {
      caption: 'Caption 3',
      src: 'https://static.wixstatic.com/media/f73c4f_a7421876c8634780b8f0fa8ffa38353e~mv2.jpg/v1/fit/w_189,h_143,q_90/f73c4f_a7421876c8634780b8f0fa8ffa38353e~mv2.jpg',
      thumbWidth: 189,
      thumbHeight: 143,
      aspect_ratio: 13 / 10,
      width: 1280,
      height: 960,
      original:
        'https://static.wixstatic.com/media/f73c4f_a7421876c8634780b8f0fa8ffa38353e~mv2.jpg',
    },
    {
      caption: 'Caption 4',
      src: 'https://static.wixstatic.com/media/f73c4f_6c0264cf64e043969e2fad8fe1f08acc~mv2.jpg/v1/fit/w_278,h_206,q_90/f73c4f_6c0264cf64e043969e2fad8fe1f08acc~mv2.jpg',
      thumbWidth: 278,
      thumbHeight: 206,
      aspect_ratio: 13 / 10,
      width: 1280,
      height: 960,
      original:
        'https://static.wixstatic.com/media/f73c4f_6c0264cf64e043969e2fad8fe1f08acc~mv2.jpg',
    },
    {
      caption: 'Caption 5',
      src: 'https://static.wixstatic.com/media/f73c4f_add952b0bffd4b47a758ed51f7afb806~mv2.jpg/v1/fit/w_104,h_206,q_90/f73c4f_add952b0bffd4b47a758ed51f7afb806~mv2.jpg',
      thumbWidth: 104,
      thumbHeight: 206,
      aspect_ratio: 1 / 2,
      width: 609,
      height: 1209,
      original:
        'https://static.wixstatic.com/media/f73c4f_add952b0bffd4b47a758ed51f7afb806~mv2.jpg',
    },
    {
      caption: 'Caption 6',
      src: 'https://static.wixstatic.com/media/f73c4f_dc81af99471f4796a91f67ae0533de9b~mv2.jpg/v1/fit/w_392,h_138,q_90/f73c4f_dc81af99471f4796a91f67ae0533de9b~mv2.jpg',
      thumbWidth: 392,
      thumbHeight: 138,
      aspect_ratio: 28 / 10,
      width: 1280,
      height: 454,
      original:
        'https://static.wixstatic.com/media/f73c4f_dc81af99471f4796a91f67ae0533de9b~mv2.jpg',
    },
    {
      caption: 'Caption 7',
      src: 'https://static.wixstatic.com/media/f73c4f_444c52a37ac745cabd91408db48688ce~mv2.jpg/v1/fit/w_392,h_293,q_90/f73c4f_444c52a37ac745cabd91408db48688ce~mv2.jpg',
      thumbWidth: 392,
      thumbHeight: 293,
      aspect_ratio: 13 / 10,
      width: 2560,
      height: 1920,
      original:
        'https://static.wixstatic.com/media/f73c4f_444c52a37ac745cabd91408db48688ce~mv2.jpg',
    },
    {
      caption: 'Caption 8',
      src: 'https://static.wixstatic.com/media/f73c4f_47fc4e8b753a428a8ef920c599f606b7~mv2.jpg/v1/fit/w_194,h_127,q_90/f73c4f_47fc4e8b753a428a8ef920c599f606b7~mv2.jpg',
      thumbWidth: 194,
      thumbHeight: 127,
      aspect_ratio: 15 / 10,
      width: 6720,
      height: 4480,
      original:
        'https://static.wixstatic.com/media/f73c4f_47fc4e8b753a428a8ef920c599f606b7~mv2.jpg',
    },
    {
      caption: 'Caption 9',
      src: 'https://static.wixstatic.com/media/f73c4f_fc936c92f5ed4e4ab8e5e1fb5626e49c~mv2.jpg/v1/fit/w_188,h_127,q_90/f73c4f_fc936c92f5ed4e4ab8e5e1fb5626e49c~mv2.jpg',
      thumbWidth: 188,
      thumbHeight: 127,
      aspect_ratio: 14 / 10,
      width: 1280,
      height: 866,
      original:
        'https://static.wixstatic.com/media/f73c4f_fc936c92f5ed4e4ab8e5e1fb5626e49c~mv2.jpg',
    },
    {
      caption: 'Caption 10',
      src: 'https://static.wixstatic.com/media/f73c4f_dc1bcee1028b408691f5443102281eb3~mv2.jpg/v1/fit/w_392,h_292,q_90/f73c4f_dc1bcee1028b408691f5443102281eb3~mv2.jpg',
      thumbWidth: 392,
      thumbHeight: 292,
      aspect_ratio: 13 / 10,
      width: 1280,
      height: 960,
      original:
        'https://static.wixstatic.com/media/f73c4f_dc1bcee1028b408691f5443102281eb3~mv2.jpg',
    },
    {
      caption: 'Caption 11',
      src: 'https://static.wixstatic.com/media/f73c4f_009942ba6e9b41c99963e1cbe5a9b965~mv2.jpg/v1/fill/w_49,h_37,q_90/f73c4f_009942ba6e9b41c99963e1cbe5a9b965~mv2.jpg',
      thumbWidth: 49,
      thumbHeight: 37,
      aspect_ratio: 13 / 10,
      width: 2048,
      height: 1536,
      original:
        'https://static.wixstatic.com/media/f73c4f_009942ba6e9b41c99963e1cbe5a9b965~mv2.jpg',
    },
    {
      caption: 'Caption 12',
      src: 'https://static.wixstatic.com/media/f73c4f_fd5e44ca177b46cab4909a8c53436688~mv2.jpg/v1/fill/w_88,h_50,q_90/f73c4f_fd5e44ca177b46cab4909a8c53436688~mv2.jpg',
      thumbWidth: 88,
      thumbHeight: 50,
      aspect_ratio: 17 / 10,
      width: 2048,
      height: 1152,
      original:
        'https://static.wixstatic.com/media/f73c4f_fd5e44ca177b46cab4909a8c53436688~mv2.jpg',
    },
    {
      caption: 'Caption 13',
      src: 'https://static.wixstatic.com/media/f73c4f_452f9776bade434e94d63f31f7af6b14~mv2.jpg/v1/fill/w_105,h_71,q_90/f73c4f_452f9776bade434e94d63f31f7af6b14~mv2.jpg',
      thumbWidth: 105,
      thumbHeight: 71,
      aspect_ratio: 15 / 10,
      width: 634,
      height: 423,
      original:
        'https://static.wixstatic.com/media/f73c4f_452f9776bade434e94d63f31f7af6b14~mv2.jpg',
    },
    {
      caption: 'Caption 14',
      src: 'https://static.wixstatic.com/media/f73c4f_112865b9d3bb4da890c9dbbd0b3dd5c5~mv2.jpg/v1/fill/w_117,h_66,q_90/f73c4f_112865b9d3bb4da890c9dbbd0b3dd5c5~mv2.jpg',
      thumbWidth: 117,
      thumbHeight: 66,
      aspect_ratio: 17 / 10,
      width: 2048,
      height: 1152,
      original:
        'https://static.wixstatic.com/media/f73c4f_112865b9d3bb4da890c9dbbd0b3dd5c5~mv2.jpg',
    },
  ],
}

export default hallOfFameData
