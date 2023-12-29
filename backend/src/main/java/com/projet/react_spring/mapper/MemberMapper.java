package com.projet.react_spring.mapper;

import com.projet.react_spring.dto.MemberDto;
import com.projet.react_spring.entity.Member;

public class MemberMapper {

    public static MemberDto mapToMemberDto(Member member){
        return new MemberDto(
                member.getId(),
                member.getFirstName(),
                member.getLastName(),
                member.getEmail()
        );
    }

    public static Member mapToMember(MemberDto memberDto){
        return new Member(
                memberDto.getId(),
                memberDto.getFirstName(),
                memberDto.getLastName(),
                memberDto.getEmail()
        );
    }
}
