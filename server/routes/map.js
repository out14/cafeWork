import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.get('/get', async (req, res) => {
  try {
    const response = await axios.get(
      'https://dapi.kakao.com/v2/local/search/keyword.json',
      {
        params: {
          query: req.query.query,
          category_group_code: 'CE7',
        },
        headers: {
          Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
        },
      }
    )

    console.log(req,'req 값')
    res.json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to fetch map data' })
  }
})




export default router
