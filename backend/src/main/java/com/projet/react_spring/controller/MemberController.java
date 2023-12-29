package com.projet.react_spring.controller;

import com.projet.react_spring.dto.MemberDto;
import com.projet.react_spring.entity.Member;
import com.projet.react_spring.exception.ResourceNotFoundException;
import com.projet.react_spring.repository.MemberRepository;
import com.projet.react_spring.service.impl.MemberServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class MemberController {

    @Autowired
    private MemberServiceImpl memberService;

    @Autowired
    private MemberRepository memberRepository;

    // Build Add Employee REST API

    @PostMapping (value = "/members", consumes = {"*/*"})
    //@RequestMapping (value = "/members", method = RequestMethod.POST)
    public ResponseEntity<MemberDto> createMember(@RequestBody MemberDto memberDto){
        MemberDto savedMember = memberService.createMember(memberDto);
        return new ResponseEntity<>(savedMember, HttpStatus.CREATED);
    }

    // Build Get All Employees REST API
    @GetMapping("/members")
    public ResponseEntity<List<MemberDto>> getAllMembers(){
        List<MemberDto> members = memberService.getAllMembers();
        return ResponseEntity.ok(members);
    }

    //get employee by id request api
    @GetMapping("/members/{id}")
    public ResponseEntity<Member> getMemberById(@PathVariable Long id){
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Member not exist with the id : + id"));
        return ResponseEntity.ok(member);
    }

    // delete member rest api
    @DeleteMapping("/members/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMember(@PathVariable Long id){
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No Member with the id :" + id));

        memberRepository.delete(member);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //Build update Member REST API
    @PutMapping("/members/{id}")
    public ResponseEntity<MemberDto> updateMember(@PathVariable("id") Long memberId,
                                                  @RequestBody MemberDto updatedMember){
        MemberDto savedMember = memberService.updateMember((Long)memberId, updatedMember);
        return new ResponseEntity<>(savedMember, HttpStatus.CREATED);
    }
}
