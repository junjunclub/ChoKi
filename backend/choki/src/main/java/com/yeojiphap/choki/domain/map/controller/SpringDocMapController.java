package com.yeojiphap.choki.domain.map.controller;

import com.yeojiphap.choki.domain.map.dto.request.RouteRequest;
import com.yeojiphap.choki.global.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "지도 컨트롤러", description = "지도의 경로를 저장, 조회, 삭제 등 관리하는 클래스")
public interface SpringDocMapController {

    @Operation(
            summary = "예습 경로 저장",
            description = "아이에게 미리 장보기 경로를 학습시키기 위해 예습 경로를 저장합니다."
    )
    @ApiResponses(value = {
            @io.swagger.v3.oas.annotations.responses.ApiResponse(responseCode = "201", description = "예습 경로 저장 완료",
                    content = @Content(mediaType = "application/json",
                            examples = @ExampleObject(value = """
                                    {
                                      "status": 201,
                                      "message": "예습 경로 저장 성공",
                                      "data": null
                                    }
                                    """
                            ))
            )
    })
    public ApiResponse saveGuidedRoute(RouteRequest request);

}