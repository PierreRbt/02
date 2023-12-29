package com.projet.react_spring.service;

import com.projet.react_spring.dto.MemberDto;

import java.util.List;

public interface MemberServiceInterface {
    MemberDto createMember(MemberDto memberDto);
    MemberDto getMemberById(Long id);
    List<MemberDto> getAllMembers();

    MemberDto updateMember(Long id, MemberDto updateMember);

    void deleteMember(Long id);
}
