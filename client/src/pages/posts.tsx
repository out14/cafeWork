import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Post {
  id: number
  title: string
  body: string
}

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export function PostsPage() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isPending)
    return <p className="text-sm text-muted-foreground">Loading…</p>
  if (isError)
    return <p className="text-sm text-destructive">{error.message}</p>

  return (
    <div className="flex flex-col gap-4">
      {data.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle className="text-base capitalize">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{post.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
