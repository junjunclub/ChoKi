package com.yeojiphap.choki.domain.map.controller;

import com.yeojiphap.choki.domain.map.dto.request.RouteRequest;
import com.yeojiphap.choki.domain.map.service.MapService;
import com.yeojiphap.choki.global.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MapController implements SpringDocMapController{
    private final MapService mapService;

    @PostMapping("/route/save")
    public ApiResponse saveGuidedRoute(@RequestBody RouteRequest request){
        return ApiResponse.success(HttpStatus.CREATED, mapService.saveGuidedRoute(request));
    }
}