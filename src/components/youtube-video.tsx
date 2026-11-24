import { useTranslations } from 'next-intl'
import {
  YouTubeVideoPlayer,
  type YouTubeVideoProps,
} from './youtube-video-player'

export function YouTubeVideo(props: YouTubeVideoProps) {
  const t = useTranslations('youtubeVideo')

  return (
    <YouTubeVideoPlayer
      {...props}
      labels={{
        play: t('play', { title: props.title }),
        eyebrow: t('eyebrow'),
        title: t('title'),
      }}
    />
  )
}
