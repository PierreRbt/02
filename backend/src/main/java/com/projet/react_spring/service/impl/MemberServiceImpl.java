package com.projet.react_spring.service.impl;

import com.projet.react_spring.dto.MemberDto;
import com.projet.react_spring.entity.Member;
import com.projet.react_spring.exception.ResourceNotFoundException;
import com.projet.react_spring.mapper.MemberMapper;
import com.projet.react_spring.repository.MemberRepository;
import com.projet.react_spring.service.MemberServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class MemberServiceImpl implements MemberServiceInterface {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public MemberDto createMember(MemberDto memberDto) {

        Member member = MemberMapper.mapToMember(memberDto);
        Member savedMember = memberRepository.save(member);
        return MemberMapper.mapToMemberDto(savedMember);
    }

    @Override
    public MemberDto getMemberById(Long id) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exists with given id : " + id));
        return MemberMapper.mapToMemberDto((member));
    }

    @Override
    public List<MemberDto> getAllMembers() {
        List<Member> members = memberRepository.findAll();
        return members.stream().map((member) -> MemberMapper.mapToMemberDto(member))
                .collect(Collectors.toList());
    }

    @Override
    public MemberDto updateMember(Long id, MemberDto updateMember) {

       Member member =  memberRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exists with given id : " + id)
        );
        member.setFirstName(updateMember.getFirstName());
        member.setLastName(updateMember.getLastName());
        member.setEmail(updateMember.getEmail());

        Member updatedMemberObj = memberRepository.save(member);

        return MemberMapper.mapToMemberDto(updatedMemberObj);
    }

    @Override
    public void deleteMember(Long id) {
        memberRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exists with given id : " + id)
        );
        memberRepository.deleteById(id);

    }
}
