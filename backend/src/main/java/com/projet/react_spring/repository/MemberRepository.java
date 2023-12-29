package com.projet.react_spring.repository;

import com.projet.react_spring.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
