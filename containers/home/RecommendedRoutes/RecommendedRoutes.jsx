import React from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';
import { styles } from './RecommendedRoutes.style';
import RouteBox from '@components/RouteBox/RouteBox';
import { Font } from '@components/commons';

const RecommendedRoutes = () => {
  const ROUTES_DATA = [
    // recommendedTags => 추후 recommendedTags.length로 변경
    {
      key: 1,
      routeName: '한강 가로등이 지켜주는 길',
      distance: 1.5,
      secondLocation: '성동구',
      thirdLocation: '송정동',
      routeImage:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUTFhwA0/IUAABgYmQFCxMqLTENEBdFRkoA1/cJmrIA2/sHq8QTDhQQQk0ItM8TCQ8SLDQOW2oQS1cJobkKkqgPV2QTBw0JnLMTAAcA3/8NdogOZnYQP0oMfpKJioxqbG4AAAUjJisLiZ4THiUQUF0Ewd4SJi4MgZQCyOYRN0F4enxSVFc6vJBGAAADi0lEQVR4nO3dW3PaQAyGYdukFKg5lHCwIbQJDaS0////lU5vsK1F7Frglfq91xj8jDKdholXybee7b4nvdcn070lvafEdJ8gVB+E+oNQfxDqD0L9Qag/CPUHof4g1B+E+oNQfxDqD0L9Qag/CPUHof4g1B+E+oOQrsj8a7xJzlxQCPCSQGG2Gfq23v+ovcn0ZbG+dsFwk0y7EhabcuDdaFKb4jHlrkjHzcE/Rph9GaT+ldXbnS5H7CWDuQAxamEqMcXIhQJTjFwoMMXoha2nGL2w9RQVCNN2U9QgHLSaogZhuynqELaZog5hmylqEYZP8XHCUfUW8/fS7/rQKcoIRze0qN3halI6XumYYiBRRrj5ytb8KSuW5AuXm4PDGPaDKiEcbbMpW958H8crs+yZJoZNUUT4Qtx+m1zEoCmKCMfCQicxZIpxCiWnGKlQcIqxCq9MceX3RtEK3cSj36fFK3QRG/91YIpY6CAO6l+8MsUspImmhCTRlpAiGhMSRGvCJtGcMMkOA+PCVe3rDnvCfAbh9SCkglA2CLkgpIJQNgi5IKSCUDYIuSCkglA2CLkgpIJQNgi5IKSCUDYIuSCkglC2fFY+XvgxqjyClfq+gV/Fz8rHlQ/4W4yk+Hi+bCzyFJ2z/LS+/LS956eFPWFZfRTynj+jf6s9iul5NZ6S1R+E+oNQfxDqD0L9Qag/COmKDn+38D3UJfD0lsVlp/sS81nl03aexKDTW3Zl9ZSV+wo7+B3/P/ieBt+1iQYhF4RUEMoGIReEVBDKBiEXhFQQygYhF4RUEMoGIReEVBDKBiEXhFQQygYhF4RUjxVO360Ls4nx82myhfEzhrKh8XOiGhO0JiSAtoQU0JSQBFoSNv+R+Sc087cY9ATPwpmR80sdE7RzBq1zglbOEXZP0MhZ0HITjPVMdrkJip2rn/M138fxwsIF7O5c/TTdztlOjbvLxvQrt/HtRrhtv8W+dn+Fc78FvR8kdEtJhztKvLawdL2j5Jbs75nBrqBr2d/3ZH1nl/29a+Z351nff2h/h6X1PaT2d8la3wfc3U7nXche7kP1bvtH9oru9nKfide2otOr0hf1JUarObuN3fNbNUFh7QnL22r8kp9zV/QlgHhK1kAQ6g9C/UGoPwj1B6H+INQfhPqDUH8Q6g9C/UGoPwj1B6H+INQfhPqDUH8Q6g9C/Z2Fr33TvSW/Ptvu9x9O9pOKEZGocgAAAABJRU5ErkJggg==',
      recommendedTags: [1, 5],
      secureTags: [3, 4],
    },
    {
      key: 2,
      routeName: '저녁에도 사람들이 많은 길',
      distance: 2.5,
      secondLocation: '사랑구',
      thirdLocation: '행복동',
      routeImage:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUTFhwA0/IUAABgYmQFCxMqLTENEBdFRkoA1/cJmrIA2/sHq8QTDhQQQk0ItM8TCQ8SLDQOW2oQS1cJobkKkqgPV2QTBw0JnLMTAAcA3/8NdogOZnYQP0oMfpKJioxqbG4AAAUjJisLiZ4THiUQUF0Ewd4SJi4MgZQCyOYRN0F4enxSVFc6vJBGAAADi0lEQVR4nO3dW3PaQAyGYdukFKg5lHCwIbQJDaS0////lU5vsK1F7Frglfq91xj8jDKdholXybee7b4nvdcn070lvafEdJ8gVB+E+oNQfxDqD0L9Qag/CPUHof4g1B+E+oNQfxDqD0L9Qag/CPUHof4g1B+E+oOQrsj8a7xJzlxQCPCSQGG2Gfq23v+ovcn0ZbG+dsFwk0y7EhabcuDdaFKb4jHlrkjHzcE/Rph9GaT+ldXbnS5H7CWDuQAxamEqMcXIhQJTjFwoMMXoha2nGL2w9RQVCNN2U9QgHLSaogZhuynqELaZog5hmylqEYZP8XHCUfUW8/fS7/rQKcoIRze0qN3halI6XumYYiBRRrj5ytb8KSuW5AuXm4PDGPaDKiEcbbMpW958H8crs+yZJoZNUUT4Qtx+m1zEoCmKCMfCQicxZIpxCiWnGKlQcIqxCq9MceX3RtEK3cSj36fFK3QRG/91YIpY6CAO6l+8MsUspImmhCTRlpAiGhMSRGvCJtGcMMkOA+PCVe3rDnvCfAbh9SCkglA2CLkgpIJQNgi5IKSCUDYIuSCkglA2CLkgpIJQNgi5IKSCUDYIuSCkglC2fFY+XvgxqjyClfq+gV/Fz8rHlQ/4W4yk+Hi+bCzyFJ2z/LS+/LS956eFPWFZfRTynj+jf6s9iul5NZ6S1R+E+oNQfxDqD0L9Qag/COmKDn+38D3UJfD0lsVlp/sS81nl03aexKDTW3Zl9ZSV+wo7+B3/P/ieBt+1iQYhF4RUEMoGIReEVBDKBiEXhFQQygYhF4RUEMoGIReEVBDKBiEXhFQQygYhF4RUjxVO360Ls4nx82myhfEzhrKh8XOiGhO0JiSAtoQU0JSQBFoSNv+R+Sc087cY9ATPwpmR80sdE7RzBq1zglbOEXZP0MhZ0HITjPVMdrkJip2rn/M138fxwsIF7O5c/TTdztlOjbvLxvQrt/HtRrhtv8W+dn+Fc78FvR8kdEtJhztKvLawdL2j5Jbs75nBrqBr2d/3ZH1nl/29a+Z351nff2h/h6X1PaT2d8la3wfc3U7nXche7kP1bvtH9oru9nKfide2otOr0hf1JUarObuN3fNbNUFh7QnL22r8kp9zV/QlgHhK1kAQ6g9C/UGoPwj1B6H+INQfhPqDUH8Q6g9C/UGoPwj1B6H+INQfhPqDUH8Q6g9C/Z2Fr33TvSW/Ptvu9x9O9pOKEZGocgAAAABJRU5ErkJggg==',
      recommendedTags: [1, 2],
      secureTags: [2, 4],
    },
    {
      key: 3,
      routeName: '가파른 구간이 없는 길',
      distance: 3.5,
      secondLocation: '안심구',
      thirdLocation: '안정동',
      routeImage:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUTFhwA0/IUAABgYmQFCxMqLTENEBdFRkoA1/cJmrIA2/sHq8QTDhQQQk0ItM8TCQ8SLDQOW2oQS1cJobkKkqgPV2QTBw0JnLMTAAcA3/8NdogOZnYQP0oMfpKJioxqbG4AAAUjJisLiZ4THiUQUF0Ewd4SJi4MgZQCyOYRN0F4enxSVFc6vJBGAAADi0lEQVR4nO3dW3PaQAyGYdukFKg5lHCwIbQJDaS0////lU5vsK1F7Frglfq91xj8jDKdholXybee7b4nvdcn070lvafEdJ8gVB+E+oNQfxDqD0L9Qag/CPUHof4g1B+E+oNQfxDqD0L9Qag/CPUHof4g1B+E+oOQrsj8a7xJzlxQCPCSQGG2Gfq23v+ovcn0ZbG+dsFwk0y7EhabcuDdaFKb4jHlrkjHzcE/Rph9GaT+ldXbnS5H7CWDuQAxamEqMcXIhQJTjFwoMMXoha2nGL2w9RQVCNN2U9QgHLSaogZhuynqELaZog5hmylqEYZP8XHCUfUW8/fS7/rQKcoIRze0qN3halI6XumYYiBRRrj5ytb8KSuW5AuXm4PDGPaDKiEcbbMpW958H8crs+yZJoZNUUT4Qtx+m1zEoCmKCMfCQicxZIpxCiWnGKlQcIqxCq9MceX3RtEK3cSj36fFK3QRG/91YIpY6CAO6l+8MsUspImmhCTRlpAiGhMSRGvCJtGcMMkOA+PCVe3rDnvCfAbh9SCkglA2CLkgpIJQNgi5IKSCUDYIuSCkglA2CLkgpIJQNgi5IKSCUDYIuSCkglC2fFY+XvgxqjyClfq+gV/Fz8rHlQ/4W4yk+Hi+bCzyFJ2z/LS+/LS956eFPWFZfRTynj+jf6s9iul5NZ6S1R+E+oNQfxDqD0L9Qag/COmKDn+38D3UJfD0lsVlp/sS81nl03aexKDTW3Zl9ZSV+wo7+B3/P/ieBt+1iQYhF4RUEMoGIReEVBDKBiEXhFQQygYhF4RUEMoGIReEVBDKBiEXhFQQygYhF4RUjxVO360Ls4nx82myhfEzhrKh8XOiGhO0JiSAtoQU0JSQBFoSNv+R+Sc087cY9ATPwpmR80sdE7RzBq1zglbOEXZP0MhZ0HITjPVMdrkJip2rn/M138fxwsIF7O5c/TTdztlOjbvLxvQrt/HtRrhtv8W+dn+Fc78FvR8kdEtJhztKvLawdL2j5Jbs75nBrqBr2d/3ZH1nl/29a+Z351nff2h/h6X1PaT2d8la3wfc3U7nXche7kP1bvtH9oru9nKfide2otOr0hf1JUarObuN3fNbNUFh7QnL22r8kp9zV/QlgHhK1kAQ6g9C/UGoPwj1B6H+INQfhPqDUH8Q6g9C/UGoPwj1B6H+INQfhPqDUH8Q6g9C/Z2Fr33TvSW/Ptvu9x9O9pOKEZGocgAAAABJRU5ErkJggg==',
      recommendedTags: [5, 3],
      secureTags: [5, 3],
    },
  ];
  const renderRoute = ({ item }) => {
    return (
      <RouteBox
        routeName={item.routeName}
        distance={item.distance}
        secondLocation={item.secondLocation}
        thirdLocation={item.thirdLocation}
        routeImage={item.routeImage}
        recommendedTags={item.recommendedTags}
        secureTags={item.secureTags}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.guide}>
        {/* RN에서는 work-break css 속성없어서 해결 방법 생각해야함 */}
        <Font size={24} weight={700} style={{ marginBottom: 4 }}>
          밤에는 밝은 경로로
        </Font>
        <Font size={24} weight={700}>
          달려보는건 어떨까요?
        </Font>
      </View>

      {/* 
        1. SectionList를 활용하여 <RouteBox /> 컴포넌트 렌더링
        2. ScrollView or FlatList를 이용하여 horizon scroll 구현 
        */}
      <FlatList
        data={ROUTES_DATA}
        renderItem={renderRoute}
        keyExtractor={(route) => route.key}
        horizontal={true}
      ></FlatList>
    </View>
  );
};

export default RecommendedRoutes;
